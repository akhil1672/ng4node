const chai = require('chai');
//const chaihttp = require('chai-http');
let expect = require('chai').expect;
const request=require('supertest');
const server = require('../../index.js');
let should = chai.should();

chai.use(require('chai-http'));

describe('Movies', () => {
    //this.timeout(5000);
    describe('/GET movies',() => { 
        before(function () {
            this.timeout(5000);
        })
        //this.timeout(5000);
        it('should get all the movies',async () => {
            let res1 = {};
            
            res=await request(server).get('/api/movies');
            console.log(res);
                expect(res1).to.have.status(200);
                expect(res1.body[0].name).to.be.equal('Hulk 2');
        
          
            // expect(res).to.have.status(200);
            // expect(res.body[0].name).to.be.equal('Hulk 2');
            // chai.request(server).get('/api/movies').end((err, res) => {
            //         //console.log(res);
            //         res.should.have.status(404);
            //         res.body.should.be.a('array');
            //         res.body.length.should.be.eql(0);
            //         expect('Content-Length').to.be.eql(145);
            //         res.body[0].should.have.property('_id');
            //         done();
            //    });
        })
    })

    // describe('/GET movies',()=>{
    //     it('should return all movies',()=>{
    //         request('http://localhost:3000/api/movies',(err,res,body)=>{
    //             res.should.have.status(200);
    //             res.body.should.be.a('array');
    //             done();
    //         })
    //     })
    // })

    // describe('/POST movies', () => {
    //     it('should add movie', async () => {
    //         chai.request(server).post('/api/movies').send({name:'Dogs',year:1970,rating:8.0}).end((err, res) => {
    //             //console.log(res);
    //             res.should.have.status(200);
    //             res.body.should.be.a('array');
    //             res.body.should.be.json;
    //             done();
    //         });
    //     })
    // })


})