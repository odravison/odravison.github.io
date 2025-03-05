---
title: 'Dangers of Names and Values in Python: How Python deals with its "variables"'
published: true
---

Hi there, in this article you will read about some interested findings about how Python deals with names and values (variables) and why it is totally different from languages like Java, C, and others.

#### [](#index) Index

1.  Context
1.  Item two
1.  Item three
1.  Item four


#### [](#context) Context

First of all, a little bit of context. How a variable is created in languages like Java? By declaring its type, naming it and then assigning a value to it.
Like this:
```java
class Main {
    public static void main(String[] args) {
        int myVar = 10; // This line here is where we create a variable
        System.out.println(myVar); // prints 10
    }
}
```
What do happen behind the scenes is that when you do `int myVar = 10;`, Java creates a space in the stack memory to store the value of `myVar`, but only because `int` is a primitive data type, otherwise, it would be stored in the _heap memory_, I won't go deeper on this topic. Within a variable you can find its data type and its value, the variable has its information.

What happen within Python is just different, in Python there is no variable storing the data type, that's why Python is a dynamic programming language. **But, how Python deals with the "variables"?**

To understand that you should know that Python doesn't use the term variable, instead it uses the term _**name**_ that would be conventionally called a variable. So in Python we say a _**name**_ refers to a **_value_** or an _**object**_, but the _**name**_ don't contains the _**value/object**_, like a variable do. A good analogy is saying that your name refers to you but it don't contains you. There may even be multiple names for the same thing, just as you may have given a name and a nickname. A _**value**_ is a particular instance of data in memory.

To assign a value to a name in Python we can do like this:
```python
my_var = 10
print(my_var) ## prints 10
```

That way, the name `my_var` is bound to the value `10` that is in memory, what means that name can be used to refer the value in memory. This operation of binding is referred as an _assigninment_.

If we assign other name to the name **_my_var_**, let say `other_var = my_var` the value 10 won't get copied but the name `other_name` will refer to the same original value as **_my_var_** is referring to.

The image below can ilustrate it better:

![](https://github.com/odravison/odravison.github.io/blob/main/not_included_assets/assigning_two_names_same_value.png?raw=true)

