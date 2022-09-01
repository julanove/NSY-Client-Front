import * as JSONRPC from './jsonrpc';
import {ClassConstructor, plainToClass} from 'class-transformer';
import { configForCurrentEnv } from '../config/environment';
/* import config from 'config'; */
//...
//const endpoint = config.get('endpoints.api'); 

const timeout = 15000;
const endpoint = configForCurrentEnv.endpoints.api;

export class Calendar { 
    public id: number;
    public name: string;
    public time: Date;
    public description: string;
}

export class Contact { 
  public name: string;
  public tel: Date;
  public content: string;
  public email: string;
}

export class Result {
    public resullt: boolean;
    public message: string;
}

export class Product {
  id: number;
  name: string;
  ava: string;
  description: string;
  flickID: string;
  year: string;
}



export class DataRPC {

    //constructor(public endpoint: string, public requestHeaders: {[key: string]: string} = {}) {}
  
    async fetchRawData(method:string): Promise<[]> {
    
      const jrpcBody = new JSONRPC.JSORPCV2Request(1, "GetRPC." + method);
      console.log('-------------------------');
      console.log(jrpcBody);
    
      return new Promise<[]>((resolve, reject) => {
  
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.addEventListener("error", reqErrorListener);
        oReq.addEventListener("timeout", reqTimeoutListener);
        oReq.open("POST", endpoint+"/jsonrpc");
        try {
          oReq.timeout = timeout;
        } catch(error) {
          console.log('timeout is not valid property');
        }
        oReq.setRequestHeader("Content-Type", "application/json");
        /* for(let key in this.requestHeaders) {
          oReq.setRequestHeader(key, this.requestHeaders[key]);
        } */
        oReq.send(jrpcBody.toString());
        //oReq.send();

        function reqListener () {
          if(oReq.status === 503) {
            reject({ code: -9996, message: '現在メンテナンス中です。' })
          }
          else if(oReq.status !== 201) {
            try {
              return reject(JSON.parse(oReq.responseText).error);
            } catch(error) {
              return reject(oReq.responseText);
            }
          }
          const obj = JSON.parse(oReq.responseText);
          if(obj.result) {
            console.log(obj.resullt);
            //const out = plainToClass(cls, obj.result);
            resolve(obj.result);
          }
          else if(obj.error) {
            reject(obj.error);
          }
            else {
           // resolve();
          } 
        }
  
        function reqErrorListener () {
          if (oReq.status > 0) {
            // サーバーエラー
            reject({ code: -9998, message: '通信に失敗しました。' })
          }
          else {
            // 通信エラー
            reject({ code: -9999, message: 'サーバーとの通信に失敗しました。' })
          }
        }
  
        function reqTimeoutListener() {
          reject({ code: -9997, message: '接続がタイムアウトしました。' })
        }

      });
    }
    
    async fetchData(method:string, cls: any): Promise<[]> {
    
      const jrpcBody = new JSONRPC.JSORPCV2Request(1, "GetRPC." + method);
    
      return new Promise<[]>((resolve, reject) => {
  
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.addEventListener("error", reqErrorListener);
        oReq.addEventListener("timeout", reqTimeoutListener);
        oReq.open("POST", endpoint+"/jsonrpc");
        try {
          oReq.timeout = timeout;
        } catch(error) {
          console.log('timeout is not valid property');
        }
        oReq.setRequestHeader("Content-Type", "application/json");
        /* for(let key in this.requestHeaders) {
          oReq.setRequestHeader(key, this.requestHeaders[key]);
        } */
        oReq.send(jrpcBody.toString());
        //oReq.send();

        function reqListener () {
          if(oReq.status === 503) {
            reject({ code: -9996, message: '現在メンテナンス中です。' })
          }
          else if(oReq.status !== 201) {
            try {
              return reject(JSON.parse(oReq.responseText).error);
            } catch(error) {
              return reject(oReq.responseText);
            }
          }
          const obj = JSON.parse(oReq.responseText);
          if(obj.result) {
            //console.log(obj.result);
            const out = plainToClass(cls, obj.result);
            resolve(<any>out);
          }
          else if(obj.error) {
            reject(obj.error);
          }
            else {
           // resolve();
          } 
        }
  
        function reqErrorListener () {
          if (oReq.status > 0) {
            // サーバーエラー
            reject({ code: -9998, message: '通信に失敗しました。' })
          }
          else {
            // 通信エラー
            reject({ code: -9999, message: 'サーバーとの通信に失敗しました。' })
          }
        }
  
        function reqTimeoutListener() {
          reject({ code: -9997, message: '接続がタイムアウトしました。' })
        }

      });
    }

    async contactNSY(input: Contact): Promise<Result> {
    
      const jrpcBody = new JSONRPC.JSORPCV2Request(1, "GetRPC.contactNSY", input);
    
      return new Promise<Result>((resolve, reject) => {
  
        //console.log('CONTACT');
        //console.log(input);
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.addEventListener("error", reqErrorListener);
        oReq.addEventListener("timeout", reqTimeoutListener);
        oReq.open("POST", endpoint+"/jsonrpc");
        //console.log(endpoint+"/calendar");
        try {
          oReq.timeout = timeout;
        } catch(error) {
          console.log('timeout is not valid property');
        }
        oReq.setRequestHeader("Content-Type", "application/json");
        oReq.send(jrpcBody.toString());
        
        function reqListener () {

          if(oReq.status === 503) {
            // メンテナンス
            reject({ code: -9996, message: '現在メンテナンス中です。' })
          }
          else if(oReq.status !== 201) {
            try {
              return reject(JSON.parse(oReq.responseText).error);
            } catch(error) {
              return reject(oReq.responseText);
            }
          }

          const obj = JSON.parse(oReq.responseText);
          if(obj.result) {
            const out = plainToClass(Calendar, obj.result);
            resolve(<any>out);
          }
          else if(obj.error) {
            reject(obj.error);

          }
            else {
           // resolve();
          } 
        }
  
        function reqErrorListener () {
          if (oReq.status > 0) {
            // サーバーエラー
            reject({ code: -9998, message: '通信に失敗しました。' })
          }
          else {
            // 通信エラー
            reject({ code: -9999, message: 'サーバーとの通信に失敗しました。' })
          }
        }
  
        function reqTimeoutListener() {
          reject({ code: -9997, message: '接続がタイムアウトしました。' })
        }

      });
    }

  }
  