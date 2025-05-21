import Cocoa


/*
This code demonstrates different ways to define functions in Swift with optional and default parameters:

1. `hello1(name: String?)` accepts an optional String parameter. It requires the argument label `name:` when called, and safely unwraps the optional inside the function.

2. `hello2(_ name: String?)` also accepts an optional String but uses a _underscore_ to omit the argument label, allowing calls without naming the parameter. It similarly unwraps the optional inside.

3. `hello3(name: String = "World")` defines a parameter with a default value, making the argument optional when calling the function. If no argument is provided, it uses the default `"World"`.

Together, these show:
- How to handle optional parameters with explicit unwrapping
- How to omit argument labels with `_`
- How to use default parameter values to make arguments optional at call site
*/

func hello1(name: String?) -> String {
    if let n = name {
        return "Hello \(n)"
    } else {
        return "Hello, World!"
    }
}
print(hello1(name: "Alice"))
print(hello1(name: nil))

func hello2(_ name: String?) -> String {
    if let n = name {
        return "Hello \(n)"
    } else {
        return "Hello, World!"
    }
}
print(hello2("Alice"))
print(hello2(nil))

func hello3(name: String = "World") -> String {
    return "Hello, \(name)"
}
print(hello3(name: "Alice"))
print(hello3())


