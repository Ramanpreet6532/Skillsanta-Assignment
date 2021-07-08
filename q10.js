function Hero(name, level)
{
name = name;
level = level;
}

// the above code is not correct. To make name and level to refer to its parent function we can use 'this' keyword which will refer to its own function

function Hero(name, level)
{
name = this.name;
level = this.level;
}