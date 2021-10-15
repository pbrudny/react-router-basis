const rewire = require("rewire")
const country_details_container_component = rewire("./country-details-container.component")
const CountryDetailsContainer = country_details_container_component.__get__("CountryDetailsContainer")
const mapStateToProps = country_details_container_component.__get__("mapStateToProps")
// @ponicode
describe("componentDidMount", () => {
    let inst

    beforeEach(() => {
        inst = new CountryDetailsContainer()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ countriesReducer: { selectedCountry: "US" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ countriesReducer: { selectedCountry: "United States" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ countriesReducer: { selectedCountry: "China" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ countriesReducer: { selectedCountry: "FR" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ countriesReducer: { selectedCountry: "France" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
