// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
export enum Direction {
    horizontal = 1,
    vertical = 2,
}
@ccclass
export default class ScrollerComponent extends cc.Component {

    /**Item */
    @property({
        tooltip: "Item预制体",
        type: cc.Prefab,
    })
    Item: cc.Prefab = null;
    /**数组长度 */
    @property({
        tooltip: "Item长度",
        type: cc.Integer,
    })
    ItemLengh: number = 0;
    /**间隔 */
    @property({
        tooltip: "X的间隔",
        type: cc.Integer,
    })
    SpaceX: number = 0;
    /**间隔 */
    @property({
        tooltip: "Y的间隔",
        type: cc.Integer,
    })
    SpaceY: number = 0;
    /**方向 */
    @property({
        type: cc.Enum(Direction)
    })
    Direction: Direction = Direction.horizontal;
    /**最大index */
    @property({
        type: cc.Integer
    })
    MaxIndex: number = 0;


    private _ItemArr: Array<cc.Node> = [];
    private _index: number = 0;

    start() {

        this._index = this.ItemLengh;
        //创建条目信息
        for (let i = 0; i < this.ItemLengh; i++) {
            let _node: cc.Node = cc.instantiate(this.Item);
            _node.parent = this.node;
            if (this.Direction == Direction.horizontal) {
                let _x: number = -(i * _node.width + this.SpaceX * i);
                _node.setPosition(_x, 0);
            } else if (this.Direction == Direction.vertical) {
                let _y: number = -(i * _node.height + this.SpaceY * i);
                _node.setPosition(0, _y);
            }
            this._ItemArr.push(_node);
        }


        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this);

    }

    private _touchMove(e: cc.Event.EventTouch): void {
        let _positon: cc.Vec2 = e.getDelta();
        this._movePos(_positon);
        if (this.Direction == Direction.horizontal) {
            this._upLeftOrRight(_positon.x)
        } else if (this.Direction == Direction.vertical) {
            this._upLeftOrRight(_positon.y)
        }
    }


    private _movePos(pos: cc.Vec2): void {


        for (let i = 0; i < this._ItemArr.length; i++) {
            if (this.Direction == Direction.horizontal) {
                this._ItemArr[i].x += pos.x;
            } else if (this.Direction == Direction.vertical) {
                if (pos.y <= 0 && this._index == this.ItemLengh) return;
                this._ItemArr[i].y += pos.y;
            }
        }

    }


    private _upLeftOrRight(dir: number): void {
        if (dir > 0) {
            // 正轴
            if (this.Direction == Direction.horizontal) {
                if (this._ItemArr[0].x >= this._ItemArr[0].width) {
                    //是否超出

                }
            } else if (this.Direction == Direction.vertical) {
                if (this._ItemArr[0].y >= this._ItemArr[0].height) {
                    let _node: cc.Node = this._ItemArr.shift();
                    _node.setPosition(0, this._ItemArr[this._ItemArr.length - 1].position.y - this._ItemArr[0].height - this.SpaceY)
                    this._ItemArr.push(_node);
                    this._index++;
                }
            }
        } else if (dir < 0) {
            //负轴
            if (this.Direction == Direction.horizontal) {
                if (this._ItemArr[0].x >= this._ItemArr[0].width) {
                    //是否超出

                }
            } else if (this.Direction == Direction.vertical) {
                if (this._ItemArr[this._ItemArr.length - 1].y <= -(this.node.height + this._ItemArr[0].height)) {
                    //是否超出
                    let _node: cc.Node = this._ItemArr.pop();
                    _node.setPosition(0, this._ItemArr[0].position.y + this._ItemArr[0].height + this.SpaceY)
                    this._ItemArr.unshift(_node);
                    this._index--;
                }
            }


        }
    }

}
