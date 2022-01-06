import express from 'express';
import  Jwt from 'jsonwebtoken';
import { AdminController } from '../controllers/Admin.controller';
import { IADMIN } from '../types/document/IAdmin';
import { DeleteAdmin, GetAdmin, SaveReqADMIN, UpdateReqADMIN } from '../types/request/Admin.request';
import { SaveUpdateResADMIN } from '../types/response/Admin.response';
import CustomeError from '../utills/error';

export class AdminRoutes {
  router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routes();
  }
  routes() {
    this.router.post('/getAdmin', async (req, res, next) => {
      try {
        const getreq:GetAdmin = req.body;
          const admin:SaveUpdateResADMIN = await new AdminController().getadmin(getreq);
          res.send(admin);
      } catch (error) {
        next(error);
      }
    });
    this.router.post('/saveadmin', async (req, res, next) => {
      try {
        const admin: SaveReqADMIN = req.body;
        const newAdmin:SaveUpdateResADMIN = await new AdminController().saveadmin(admin);
        res.status(200).json({
          message: newAdmin
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.put('/updateadmin', async (req, res, next) => {
      try {
        const admin: UpdateReqADMIN = req.body;
        const upadated_admin:SaveUpdateResADMIN = await new AdminController().updateAdmin(admin);
        const response = {
          upadated_admin,
        };
        res.status(200).json({
          message: response
        });
      } catch (error) {
        next(error);
      }
    });
    this.router.delete('/deleteadmin', async (req, res, next) => {
      try {
        const delreq:DeleteAdmin = req.body;
        const Deleted_admin = await new AdminController().deletadmin(delreq);
        res.status(200).json({
          message: 'admin deleted'
        });
      } catch (error) {
        next(error);
      }
    });

  }
}

// export function expressAuthentication(
//     request: express.Request,
//     securityName: string,
//     scopes?: string[]
//   ): Promise<any> {
//     if (securityName === "api_key") {
//       let token;
//       if (request.query && request.query.access_token) {
//         token = request.query.access_token;
//       }
  
//       if (token === "abc123456") {
//         return Promise.resolve({
//           id: 1,
//           name: "Ironman",
//         });
//       } else {
//         return Promise.reject({});
//       }
//     }
  
//     if (securityName === 'Jwt') {
//       const token =
//         request.body.token ||
//         request.query.token ||
//         request.headers["x-access-token"];
  
//       return new Promise((resolve, reject) => {
//         if (!token) {
//           reject(new Error("No token provided"));
//         }
//         Jwt.verify(token, "[secret]", function (err: any, decoded: any) {
//           if (err) {
//             reject(err);
//           } else {
//             // Check if JWT contains all required scopes
//             for (let scope of scopes) {
//               if (!decoded.scopes.includes(scope)) {
//                 reject(new Error("JWT does not contain required scope."));
//               }
//             }
//             resolve(decoded);
//           }
//         });
//       });
//     }
//   }











export const AdminRoutesApi = new AdminRoutes().router;