// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


// export class HelloController {
//   constructor() {}
// }

import {Request, RestBindings, get, ResponseObject} from '@loopback/rest';
import {inject} from '@loopback/context';

const RESPONSE: ResponseObject = {
  description: 'Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          error_code: {type: 'number'},
          status: {type: 'string'},
          message: {type: 'string'},
          user:{
          	 type: 'object',
            properties: {
                 id :{type:'string'},
           name :{type:'string'},
           mobile :{type:'number'},
           dob:{type : 'string'},
           address:{type:'string'}
        },
            },
          }
       
      },
    },
  },
};

export class HelloController {
  @get('/hello')
  hello(): string {
    return 'Good Morning..!!!Welcome to the Loopback 4 world...!';
  }
  @get('/user', {
    responses: {
      '200': RESPONSE,
    },
  })
  user(): object {
    return {
      error_code: 0,
      status:"Success",
      message: "User Get Successfully.",
      user:{
      	 id :1,
        name :"Qwerty",
        mobile :1234567890,
        dob: new Date(),
        address:"45/B , santiniketan , Mumbai-009"
      }
       
    };
  }
}
