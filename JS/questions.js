const questions = [

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Car {
public:
    int speed = 100;
};

int main()
{
    Car c1;
    Car c2;

    c1.speed = 200;

    cout << c2.speed << endl;

    return 0;
}
`,

        options: [
            "0",
            "100",
            "200",
            "Error"
        ],

        answer: "100"
    },

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Student {
public:
    int age = 15;

    void display() {
        cout << age + 5 << endl;
    }
};

int main()
{
    Student s;

    s.display();

    return 0;
}
`,

        options: [
            "15",
            "5",
            "20",
            "Error"
        ],

        answer: "20"
    },

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Car {
protected:
    int speed = 150;

public:
    void show() {
        cout << speed << endl;
    }
};

class BMW : public Car {
public:
    void changeSpeed() {
        speed = 200;
    }
};

int main()
{
    BMW b;

    b.changeSpeed();
    b.show();

    return 0;
}
`,

        options: [
            "150",
            "200",
            "Error",
            "0"
        ],

        answer: "200"
    },

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Number {
private:
    int x;

public:
    void setX(int value) {
        x = value;
    }

    int getX() {
        return x;
    }
};

int main()
{
    Number n;

    n.setX(25);

    cout << n.getX() << endl;

    return 0;
}
`,

        options: [
            "0",
            "25",
            "5",
            "Error"
        ],

        answer: "25"
    },

    {
        question: "ما هو ناتج الكود ؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Student {
private:
    int grade = 80;

public:
    void setGrade(int g) {
        if (g >= 0 && g <= 100)
            grade = g;
    }

    int getGrade() {
        return grade;
    }
};

int main()
{
    Student s;

    s.setGrade(120);

    cout << s.getGrade() << endl;

    return 0;
}
`,

        options: [
            "120",
            "80",
            "100",
            "Error"
        ],

        answer: "80"
    },

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Student {
public:
    int age;

    Student(int a) {
        age = a;
    }
};

int main()
{
    Student s(20);

    cout << s.age << endl;

    return 0;
}
`,

        options: [
            "10",
            "20",
            "0",
            "Error"
        ],

        answer: "20"
    },

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Number {
public:
    Number(int x) {
        cout << x << endl;
    }

    Number(int x, int y) {
        cout << x + y << endl;
    }
};

int main()
{
    Number n(3, 4);

    return 0;
}
`,

        options: [
            "3",
            "4",
            "7",
            "Error"
        ],

        answer: "7"
    },

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class A {
public:
    void show() {
        cout << "Parent" ;
    }
};

class B : public A {
public:
    void display() {
        cout << "Child" ;
    }
};

int main()
{
    B obj;

    obj.show();
    obj.display();

    return 0;
}
`,

        options: [
            "ChildParent",
            "Parent",
            "ParentChild",
            "Error"
        ],

        answer: "ParentChild"
    },

    {
        question: "أي مجموعة من الدوال التالية يمكن عمل Method Overloading لها؟",

        code: String.raw`
#include <iostream>
using namespace std;


int main()
{
    return 0;
}
`,

        options: [
            "int add(int x); int add(int y);",
            "int add(int x); int add(double x);",
            "int add(int x); double add(int x);",
            "int add(int x); int add(int x);"
        ],

        answer: "int add(int x); int add(double x);"
    },

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Car {
private:
    int speed = 100;

protected:
    int price = 500000;
};

class BMW : public Car {
public:
    void show() {
        cout << price << endl;
    }
};

int main()
{
    BMW b;

    b.show();

    return 0;
}
`,
    options: [
        "100",
        "500000",
        "Error",
        "0"
    ],

    answer: "500000"
},

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
class Car {
public:
    void start() {
        cout << "Car Started" << endl;
    }
};

class BMW : public Car {
public:
    void drive() {
        cout << "BMW is Driving" << endl;
    }
};

int main()
{
    BMW car;

    car.start();

    return 0;
}
`,

          options: [
        "Car Started",
        "BMW is Driving",
        "Car Started BMW is Driving",
        "Error"
    ],

    answer: "Car Started"
},
    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Student {
private:
    int age;

public:
    void setAge(int a) {
        if (a > 0)
            age = a;
    }

    int getAge() {
        return age;
    }
};

int main()
{
    Student s;

    s.setAge = 20;

    cout << s.getAge() << endl;

    return 0;
}
`,
  options: [
        "0",
        "20",
        "Error",
        "age"
    ],

    answer: "Error"
},

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class A {
public:
    virtual void print() {
        cout << 1 << endl;
    }
};

class B : public A {
public:
    void print() override {
        cout << 2 << endl;
    }
};

int main()
{
    B b;

    A* p = &b;

    p->print();

    return 0;
}
`,

        options: [
            "1",
            "2",
            "12",
            "Error"
        ],

        answer: "2"
    },

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Animal {
public:
    virtual void sound() = 0;
};

class Dog : public Animal {
public:
    void sound() override {
        cout << "Bark" << endl;
    }
};

int main()
{
    Animal a;

    a.sound();

    return 0;
}
`,

         options: [
        "Bark",
        "Animal",
        "Error",
        "0"
    ],

    answer: "Error"
},
    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Employee {
public:
    virtual void work() = 0;

    void show() {
        cout << "Employee" << endl;
    }
};

class Developer : public Employee {
public:
    void work() override {
        cout << "Coding" << endl;
    }
};

int main()
{
    Developer d;

    d.show();
    d.work();

    return 0;
}
`,

    options: [
        "Employee Coding",
        "Coding Employee",
        "Employee",
        "Error"
    ],

    answer: "Employee Coding"
},

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Employee {
private:
    double salary;

public:
    void setSalary(double s) {
        salary = s;
    }

    double getSalary() {
        return salary;
    }
};

int main()
{
    Employee emp;

    emp.salary = 5000;

    cout << emp.getSalary() << endl;

    return 0;
}
`,

    options: [
        "5000",
        "0",
        "Error",
        "salary"
    ],

    answer: "Error"
},
    {
        question: "ما ناتج الكود؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Car {
public:
    virtual void start() final {
        cout << "Car" << endl;
    }
};

class BMW : public Car {
public:
    void start() override {
        cout << "BMW" << endl;
    }
};

int main()
{
    BMW b;

    b.start();

    return 0;
}
`,

        options: [
            "Car",
            "BMW",
            "CarBMW",
            "Error"
        ],

        answer: "Error"
    },

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Calculator {
public:
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }
};

int main()
{
    Calculator c;

    cout << c.add(5, 10) << endl;
    cout << c.add(2.5, 3.5) << endl;
    cout << c.add(1, 2, 3) << endl;

    return 0;
}
`,

      options: [
        "15 6 6",
        "15 5 6",
        "Error",
        "15 6.0 5"
    ],

    answer: "15 6 6"
},

];