jest.mock('./base-class')

const instances = require('./base-class')

it("should return different values", () => {

    instances.instance1.value.mockReturnValue(4)
    instances.instance2.value.mockReturnValue(6)

    expect(instances.instance1.value()).toEqual(4)
    expect(instances.instance2.value()).toEqual(6)
})