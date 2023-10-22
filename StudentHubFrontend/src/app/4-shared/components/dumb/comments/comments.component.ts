import { Component } from '@angular/core';
import { IComment } from 'src/app/5-models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  public comments: IComment[] = [
    {
      avatar: '../../../../../assets/avatarTest.jpg',
      nickname: "Jagdish_Panda",
      comment: "The group is rly good, i got a lot of documents whiches I could use for my homeworks"
    },
    {
      avatar: '../../../../../assets/avatarTest.jpg',
      nickname: "Amanda_123",
      comment: "I liked the group"
    },
    {
      avatar: '../../../../../assets/avatarTest.jpg',
      nickname: "DogDog",
      comment: "I would not buy the subscription if i could(((("
    },
    {
      avatar: '../../../../../assets/avatarTest.jpg',
      nickname: "StepaBigBoy",
      comment: "The group is rly good, i got a lot of documents whiches I could use for my homeworks"
    },
    {
      avatar: '../../../../../assets/avatarTest.jpg',
      nickname: "Jagdish_Panda",
      comment: "The group is rly good, i got a lot of documents whiches I could use for my homeworks"
    },
    {
      avatar: '../../../../../assets/avatarTest.jpg',
      nickname: "Jagdish_Panda",
      comment: "The group is rly good, i got a lot of documents whiches I could use for my homeworks"
    },
  ];
}
