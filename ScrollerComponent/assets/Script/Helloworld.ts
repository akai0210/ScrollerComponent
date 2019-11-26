import ScrollerComponent from "./ScrollerComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(ScrollerComponent)
    scrollerComponent:ScrollerComponent = null;

    start () {
        // init logic
        // this.label.string = this.text;
        // this.scrollerComponent.set = this._callback;
    }


    private _callback(...args:any[]){
        console.log("超过的回调",args);
    }
}
