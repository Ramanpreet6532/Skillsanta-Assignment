function foo1() {
    return {
        bar: "hello"
    };
}

function foo2() {
    return
    {
        bar: "hello"
    };
}

foo1(); //output= {bar: "hello"} the return statement of function
foo2(); //output= undefined, because the return statement is not considering the lines after it. if we want to use the return statement without parantheses we have to write the code on the same line but if we want to put the code lines after it we can use it with parantheses then it will show the output else we can put the code on the same line to make it considerable.


// correction

function foo2() {
    return (
        {
            bar: "hello"
        }
    )
}