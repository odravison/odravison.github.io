---
title: 'Dangers of Names and Values in Python: The differences between Python and Java "variables"'
published: true
---

Hi there, in this article you will read about some interested findings about how Python deals with names and values, convertionally called as variables, and why it is totally different from languages like Java, C, and others.

#### [](#index) Index

1.  Context
1.  Variable creation in Java
1.  Variable creation in Python
1.  The danger in Python


#### [](#context) Context

When working with Java and Python, it is crucial to understand the fundamental differences in how these languages handle variable creation and memory management. While both languages provide mechanisms for referencing values in memory, their approaches differ significantly due to their underlying paradigms.

#### [](#Variable-creation-in-Java) Variable creation in Java

How a variable is created in languages like Java? By declaring its type, naming it and then assigning a value to it. This is needed because Java is a statically typed language, meaning that variable types must be explicitly declared at compile time.

Like this:
```java
class Main {
    public static void main(String[] args) {
        int myVar = 10; // This line here is where we create a variable
        System.out.println(myVar); // prints 10
    }
}
```
What do happen behind the scenes is that when you do `int myVar = 10;`, Java creates a space in the stack memory to store the value of `myVar`, but only because `int` is a primitive data type, otherwise, it would be stored in the _heap memory_, and the variable would only has a reference where to find the data in the _heap memory_.

Within a Java variable you can find its data type and its data value, the variable has its information. Which you will see that isn't the same for Python "variables".

#### [](#Variable-creation-in-Java) Variable creation in Python

To understand that you should know that Python doesn't use the term variable, instead it uses the term _**name**_ that would be conventionally called a variable. So in Python we say a _**name**_ refers to a **_value_** or an _**object**_, but the _**name**_ doesn't contain the _**value/object**_, like a variable do. A good analogy is saying that your name refers to you but it don't contains you. There may even be multiple names for the same thing, just as you may have given a name and a nickname. A _**value**_ is a particular instance of data in memory.

What happen in Python is just different, in Python there is no variable storing the data type, that's why Python in contrast, is dynamically typed and follows a name-binding model rather than direct memory assignment. Variables in Python are merely names that reference objects in memory. You can assign a _name_ firstly with a `float` value and in the very next line, use the same _name_ to assign a `int` value and no error will happen. Like this:
```python
cloth_price = 19.99 ## Assigning a float
cloth_price = 10 ## Assigning a int
```
The code above demonstrates how assign a _value_ to a _name_ in Python. That way, the name `cloth_price` is bound to the value `10` which is in the memory, meaning that the name `cloth_price` can be used to refer the value `10` in memory. This operation of binding is referred as an _assigninment_.

If we assign other name to the name `cloth_price`, let say `blouse = cloth_price` the value 10 won't get copied but the name `blouse` will refer to the same original value as `cloth_price` is bounded.

The image below can ilustrate it better:

![](https://github.com/odravison/odravison.github.io/blob/main/not_included_assets/assigning_two_names_same_value.png?raw=true)

What should happen if we modify the value referenced using the name `cloth_price`, will modify the value referenced by the name `blouse`? The answer is **NO**!

The reason is when a variable is assigned in Python, it does not store a value directly but instead acts as a label pointing to an object in memory, so if we do that:

```python
cloth_price = 10
blouse = cloth_price
print(cloth_price) ## prints 10
print(blouse) ## prints 10
cloth_price = 13
print(cloth_price) ## prints 13
print(blouse) ## prints 10
```
It can be ilustrated as below:

![](https://github.com/odravison/odravison.github.io/blob/main/not_included_assets/assigning_two_names_different_values.png?raw=true)

As you can see, `cloth_price` and `blouse` both reference the same integer object 10. After the line `cloth_price = 13` is executed, in this case since integers are immutable in Python, any modification (`cloth_price = 13`) results in `cloth_price` pointing to a new object.


