import { observable, action, reaction, computed } from "mobx";
import { any } from "C:/Users/ddelo/AppData/Local/Microsoft/TypeScript/3.3/node_modules/@types/prop-types";
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

interface User {
  email: string;
}

class newsStore {
  @observable Favorite: INews[] = [];

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
