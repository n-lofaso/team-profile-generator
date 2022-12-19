
const Manager = require('../lib/Manager.js');

describe('Get', () => {
    it('able to get name of manager', ()=>{
        const managerName = 'bob'
        const testManager = new Manager('bob', 1337, 'bev@gmail.com', 424)
        expect(testManager.getName()).toBe(managerName)
     })

    it('able to get id of manager', ()=>{
        const managerId = 1337
        const testManager = new Manager('bob', 1337, 'bev@gmail.com', 424)
        expect(testManager.getId()).toBe(managerId)
     })

    it('able to get email of manager', ()=>{
        const managerEmail = 'bev@gmail.com'
        const testManager = new Manager('bob', 1337, 'bev@gmail.com', 424)
        expect(testManager.getEmail()).toBe(managerEmail)
     }) 

    it('able to get role', ()=>{
        const managerRole = 'Manager'
        const testManager = new Manager('bob', 1337, 'bev@gmail.com', 424)
        expect(testManager.getRole()).toBe(managerRole)
     })
})