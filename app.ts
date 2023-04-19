import express from "express";

export class Quark {
  static Router = class AppRouter {
    private static _instance: express.Router;

    static getInstance(): express.Router {
      if (!AppRouter._instance) {
        AppRouter._instance = express.Router();
      }
      return AppRouter._instance;
    }
  };
}
