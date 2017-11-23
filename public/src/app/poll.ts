export class Poll {
  constructor(
  public _id: string = "",
  public question: string = "",
  public creator: string = "",
  public option_1 : {} = {title: "", vote_count: 0},
  public option_2 : {} = {title: "", vote_count: 0},
  public option_3 : {} = {title: "", vote_count: 0},
  public option_4 : {} = {title: "", vote_count: 0}
){}
}
