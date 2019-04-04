import { observable, action, reaction, computed } from "mobx";
import { timingSafeEqual } from "crypto";

interface INews {
  source: {
    id?: string;
    name: string;
  };
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface IUser {
  email: string;
}

class newsStore {
  @observable Favorite: INews[] = [];
  @observable Users: IUser[] = [];

  @action
  addNews(news: INews) {
    this.Favorite.push({ ...news });
  }

  @computed
  get addedNews() {
    return this.Favorite;
  }
}

export const NewsStore = new newsStore();
