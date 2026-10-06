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
        cout << "Parent" << endl;
    }
};

class B : public A {
public:
    void display() {
        cout << "Child" << endl;
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

int add(int x);
int add(double x);

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

class A {
public:
    void show() {
        cout << "A" << endl;
    }
};

class B : public A {
public:
    void show() {
        cout << "B" << endl;
    }
};

int main()
{
    B obj;

    obj.show();

    return 0;
}
`,

        options: [
            "A",
            "B",
            "AB",
            "Error"
        ],

        answer: "B"
    },

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Animal {
public:
    void sound() {
        cout << "Animal" << endl;
    }
};

class Dog : public Animal {
public:
    void sound() {
        cout << "Dog" << endl;
    }
};

int main()
{
    Dog d;

    d.sound();

    return 0;
}
`,

        options: [
            "Animal",
            "Dog",
            "AnimalDog",
            "Error"
        ],

        answer: "Dog"
    },

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class A {
public:
    virtual void show() {
        cout << "A" << endl;
    }
};

class B : public A {
public:
    void show() override {
        cout << "B" << endl;
    }
};

int main()
{
    B obj;

    A* ptr = &obj;

    ptr->show();

    return 0;
}
`,

        options: [
            "A",
            "B",
            "AB",
            "Error"
        ],

        answer: "B"
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
    Dog d;

    d.sound();

    return 0;
}
`,

        options: [
            "Animal",
            "Bark",
            "Error",
            "0"
        ],

        answer: "Bark"
    },

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Shape {
public:
    virtual void draw() = 0;

    void info() {
        cout << "Shape" << endl;
    }
};

class Circle : public Shape {
public:
    void draw() override {
        cout << "Circle" << endl;
    }
};

int main()
{
    Circle c;

    c.info();
    c.draw();

    return 0;
}
`,

        options: [
            "CircleShape",
            "Circle",
            "ShapeCircle",
            "Error"
        ],

        answer: "ShapeCircle"
    },

    {
        question: "ما هو ناتج الكود التالي؟",

        code: String.raw`
#include <iostream>
using namespace std;

class Payment {
public:
    virtual void pay() = 0;
};

class Cash : public Payment {
public:
    void pay() override {
        cout << "Cash" << endl;
    }
};

int main()
{
    Cash c;

    Payment* p = &c;

    p->pay();

    return 0;
}
`,

        options: [
            "Payment",
            "Cash",
            "Error",
            "0"
        ],

        answer: "Cash"
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

class Car {
protected:
    int speed = 100;

public:
    virtual void start() {
        cout << "Car" << endl;
    }
};

class BMW : public Car {
public:
    void changeSpeed() {
        speed = 200;
    }

    void start() override {
        cout << speed << endl;
    }
};

int main()
{
    BMW b;

    b.changeSpeed();

    Car* p = &b;

    p->start();

    return 0;
}
`,

        options: [
            "100",
            "200",
            "Car",
            "Error"
        ],

        answer: "200"
    }

];