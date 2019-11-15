var SequelizeMock = require("sequelize-mock")
var dbMock = new SequelizeMock()
var chai = require('chai')
var expect = chai.expect;
var note = dbMock.define('Mynotes');
note.$queueResult([
    note.build({
      'title': 'Jenkins',
      'content': 'active'
    }),
    note.build({
      'title': 'unit testing',
      'content': 'completed'
    })
  ]);
describe("Test Sequelize Mocking", () => {  
    it("Should get all the notes from mock model", async () => {
        const notes  = await note.findAll();
        expect(notes.length).to.equal(2);
    })
    it("Should create value into the model", async () => {
        const notes = await note.create({
            title: "hello",
            content: "completed"
        });
        expect(notes.get('title')).to.equal('hello');
        expect(notes.get('content')).to.equal('completed');
    })
   it("Should delete value from the model", async () => {
     const notes = await note.destroy({ 
       where: {
        id: 3
       }
      });
     expect(notes).to.equal(1);
    })
})
    
  