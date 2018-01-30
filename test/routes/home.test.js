let expect=require('chai').expect;
let request=require('request');

describe('Home page',()=>{
    it('should return home page',()=>{
        request('http://localhost:3000/',(err,res,body)=>{
            res.should.have.status(200);
            done();
        })
    })
})