const chai = require('chai');
const chaihttp = require('chai-http');
let expect = require('chai').expect;
const request=require('request');
let server = require('../../index');
let should = chai.should();

chai.use(chaihttp);

describe('Movies', () => {
    describe('/GET movies', () => {
        it('should get all the movies',async () => {
            chai.request(server).get('/movies').end((err, res) => {
                    console.log(res);
                    res.should.have.status(404);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    expect('Content-Length').to.be.eql(145);
                    res.body[0].should.have.property('_id');
                    done();
                });
        })
    })

    describe('/GET movies',()=>{
        it('should return all movies',()=>{
            request('http://localhost:3000/api/movies',(err,res,body)=>{
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            })
        })
    })

    describe('/POST movies', () => {
        it('should add movie', async () => {
            chai.request(server).post('/movies').send({name:'Dogs',year:1970,rating:8.0}).end((err, res) => {
                //console.log(res);
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.should.be.json;
                done();
            });
        })
    })


})