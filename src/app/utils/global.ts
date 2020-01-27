export class Globals{
    public static page:String = 'congrats';
    public static content:String = 'certified';
    public static agent:Object; 

    static setPage(val: String) {
        this.page = val;
    }

    static setContent(val: String) {
        this.content = val;
    }

    static setAgent(val: string[]) {
        this.agent = val;
    }
}