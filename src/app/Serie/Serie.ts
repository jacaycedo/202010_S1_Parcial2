export class Serie {
  constructor( private numberA: number, private nameA: String, private hanelA: String, private seasonsA: number,
    private descriptionA: String, private pageA: String, private posterA: String){}

  get id(): number { return this.numberA;}
  get name(): String { return this.nameA;}
  get channel() : String {return this.hanelA};
  get seasons():number { return this.seasonsA;}
  get description(): String{return this.descriptionA;}
  get webpage(): String{return this.pageA;}
  get poster():String{return this.posterA;}

}
