class BaseClass {
    value() {
        return 0
    }
}

const instance1 = new BaseClass()
const instance2 = new BaseClass()

module.exports = {instance1, instance2}