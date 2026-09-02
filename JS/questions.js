const questions = [

    // Q1
    {
        question: "بعد تنفيذ البرنامج بالكامل، ما القيمتان اللتان سيتم طباعتهما؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int x = 4;
    int y = 3;

    x += 2;
    y *= x;
    x--;

    cout << x << " " << y;

    return 0;
}
        `,
        options: [
            "5 18",
            "6 18",
            "5 15",
            "4 18"
        ],
        answer: "5 18"
    },

    // Q2
    {
        question: "ما القيمة النهائية للمتغير x بعد تنفيذ جميع الأوامر؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int x = 8;

    x += 4;
    x *= 2;
    x -= 6;
    x /= 2;

    cout << x;

    return 0;
}
        `,
        options: [
            "9",
            "10",
            "11",
            "12"
        ],
        answer: "9"
    },

    // Q3
    {
        question: "ما الناتج؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int x = 8;
    int y = 3;

    if ((x > 5 && y < 5) && !(x == 10 || y == 0))
        cout << "Yes";
    else
        cout << "No";

    return 0;
}
        `,
        options: [
            "Yes",
            "No",
            "8",
            "3"
        ],
        answer: "Yes"
    },

    // Q4
    {
        question: " ما الناتج الذي سيظهر؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int age = 17;
    bool card = true;

    if (age >= 18 || !card)
        cout << "OK";
    else
        cout << "No";

    return 0;
}
        `,
        options: [
            "OK",
            "No",
            "true",
            "17"
        ],
        answer: "No"
    },

    // Q5
    {
        question: "إذا كانت قيمة x تساوي 10، فما الناتج؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int x = 10;

    if (x % 3 == 0 && x % 5 == 0)
        cout << "A";
    else if (x % 3 == 0)
        cout << "B";
    else if (x % 5 == 0)
        cout << "C";
    else
        cout << "D";

    return 0;
}
        `,
        options: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "C"
    },

    // Q6
    {
        question: "أي مجموعة من القيم تختبر الحالات الثلاث Positive و Negative و Zero؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int x;
    cin >> x;

    if (x > 0)
        cout << "Positive";
    else if (x < 0)
        cout << "Negative";
    else
        cout << "Zero";

    return 0;
}
        `,
        options: [
            "1, 2, 3",
            "-5, 0, 7",
            "0, 0, 0",
            "-1, -2, -3"
        ],
        answer: "-5, 0, 7"
    },

    // Q7
    {
        question: " ما الناتج؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int x = 10;

    if (x > 5)
    {
        if (x % 2 == 0)
            cout << "A";
        else
            cout << "B";
    }
    else
    {
        cout << "C";
    }

    return 0;
}
        `,
        options: [
            "A",
            "B",
            "C",
            "10"
        ],
        answer: "A"
    },

    // Q8
    {
        question: "أي كود من التالي يجد أكبر عنصر في المصفوفة بشكل صحيح؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int a[5] = {3, -2, 10, 5, 7};

    // اختر الكود الصحيح

    return 0;
}
        `,
        options: [
            "A) int big = a[0]; for(int i = 1; i < 5; i++) if(a[i] > big) big = a[i];",
            "B) int big = a[0]; for(int i = 1; i <= 5; i++) if(a[i] > big) big = a[i];",
            "C) int big = a[0]; for(int i = 1; i < 5; i++) if(a[i] < big) big = a[i];",
            "D) int big = 0; for(int i = 1; i < 5; i++) if(a[i] > big) big = a[i];"
        ],
        answer: "A) int big = a[0]; for(int i = 1; i < 5; i++) if(a[i] > big) big = a[i];"
    },

    // Q9
    {
        question: "عند تشغيل البرنامج كما هو، ماذا سيحدث؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int x = 1;

    while(x <= 5)
    {
        cout << x << " ";
    }

    return 0;
}
        `,
        options: [
            "سيطبع 1 2 3 4 5 ثم يتوقف",
            "سيطبع 1 مرة واحدة ثم يتوقف",
            "سيستمر في التكرار لأن x لا تتغير",
            "لن يتم تنفيذ الحلقة"
        ],
        answer: "سيستمر في التكرار لأن x لا تتغير"
    },

    // Q10
    {
        question: "ما القيمة النهائية للمتغير sum؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int sum = 1;

    for(int i = 1; i <= 5; i++)
    {
        if(i % 2 != 0)
            sum += i;
    }

    cout << sum;

    return 0;
}
        `,
        options: [
            "9",
            "10",
            "12",
            "16"
        ],
        answer: "10"
    },

    // Q11
    {
        question: "ما القيمة النهائية للمتغير sum بعد انتهاء الحلقة؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int sum = 0;

    for(int i = 1; i <= 6; i++)
    {
        if(i % 2 == 0)
            sum += i;
    }

    cout << sum;

    return 0;
}
        `,
        options: [
            "6",
            "9",
            "12",
            "21"
        ],
        answer: "12"
    },

    // Q12
    {
        question: "عندما تصل قيمة i إلى 5، ما آخر قيمة سيتم طباعتها؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    for(int i = 1; i <= 10; i++)
    {
        if(i == 5)
            break;

        cout << i << " ";
    }

    return 0;
}
        `,
        options: [
            "4",
            "5",
            "6",
            "10"
        ],
        answer: "4"
    },

    // Q13
    {
        question: "كم مرة سيتم تنفيذ أمر  cout ؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    for(int i = 1; i <= 3; i++)
    {
        for(int j = 1; j <= 3; j++)
        {
            if(j == 2)
                break;

            cout << j << " ";
        }
    }

    return 0;
}
        `,
        options: [
            "2 مرات",
            "3 مرات",
            "6 مرات",
            "9 مرات"
        ],
        answer: "3 مرات"
    },

    // Q14
    {
        question: "ما الناتج بعد تنفيذ lOOP ؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    for(int i = 1; i <= 5; i++)
    {
        if(i == 3)
            continue;

        cout << i << " ";
    }

    return 0;
}
        `,
        options: [
            "1 2 3 4 5",
            "1 2 4 5",
            "1 2 3",
            "3 4 5"
        ],
        answer: "1 2 4 5"
    },

    // Q15
    {
        question: "أي اختيار يمثل الناتج الصحيح للبرنامج؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    for(int i = 1; i <= 2; i++)
    {
        for(int j = 1; j <= 3; j++)
        {
            cout << j << " ";
        }

        cout << endl;
    }

    return 0;
}
        `,
        options: [
            "1 2 3 / 1 2 3",
            "1 2 / 1 2 / 1 2",
            "1 2 3 1 2 3",
            "1 1 / 2 2 / 3 3"
        ],
        answer: "1 2 3 / 1 2 3"
    },

    // Q16
    {
        question: "ما القيمة النهائية للمتغير count؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int a[6] = {3, 8, 5, 10, 7, 4};
    int count = 0;

    for(int i = 0; i < 6; i++)
    {
        if(a[i] % 2 == 0)
            count++;
    }

    cout << count;

    return 0;
}
        `,
        options: [
            "2",
            "3",
            "4",
            "6"
        ],
        answer: "3"
    },

    // Q17
    {
        question: "كم مرة ستظهر القيمة 2 داخل المصفوفة؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int a[5] = {4, 2, 7, 2, 9};
    int count = 0;

    for(int i = 0; i < 5; i++)
    {
        if(a[i] == 2)
            count++;
    }

    cout << count;

    return 0;
}
        `,
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: "2"
    },

    // Q18
    {
        question: "ما القيمة الموجودة في a[1][2]؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int a[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    cout << a[1][2];

    return 0;
}
        `,
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        answer: "6"
    },

    // Q19
    {
        question: "ما القيمة النهائية للمتغير sum؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int a[2][2] = {
        {1, 2},
        {3, 4}
    };

    int sum = 0;

    for(int i = 0; i < 2; i++)
    {
        for(int j = 0; j < 2; j++)
        {
            sum += a[i][j];
        }
    }

    cout << sum;

    return 0;
}
        `,
        options: [
            "4",
            "6",
            "10",
            "12"
        ],
        answer: "10"
    },

    // Q20
    {
        question: "ما الحرف الذي سيتم الوصول إليه باستخدام name[3]؟",
        code: `
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string name = "Ahmed";

    cout << name[3];

    return 0;
}
        `,
        options: [
            "A",
            "h",
            "m",
            "e"
        ],
        answer: "e"
    },

    // Q21
    {
        question: " ما الحرف الذي سيتم طباعته؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    char letters[] = {'A', 'B', 'C', 'D'};

    char *p = letters;

    p++;

    cout << *p;

    return 0;
}
        `,
        options: [
            "A",
            "B",
            "C",
            "D"
        ],
        answer: "B"
    },

    // Q22
    {
        question: "ما الناتج الكامل؟",
        code: `
#include <iostream>
using namespace std;

void calc(int x)
{
    x = x + 3;

    if(x % 2 == 0)
        cout << "Even";
    else
        cout << "Odd";
}

int main()
{
    int x = 4;

    calc(x);

    cout << " " << x;

    return 0;
}
        `,
        options: [
            "Even 7",
            "Odd 4",
            "Odd 7",
            "Even 4"
        ],
        answer: "Odd 4"
    },

    // Q23
    {
        question: "ما الناتج؟",
        code: `
#include <iostream>
using namespace std;

int x = 10;

void test()
{
    int x = 20;

    cout << x << " ";
}

int main()
{
    test();

    cout << x;

    return 0;
}
        `,
        options: [
            "10 10",
            "20 20",
            "20 10",
            "10 20"
        ],
        answer: "20 10"
    },

    // Q24
    {
        question: "ما القيمة النهائية للمتغير sum؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int sum = 0;

    for(int i = 1; i <= 5; i++)
    {
        if(i == 3)
            continue;

        sum += i;
    }

    cout << sum;

    return 0;
}
        `,
        options: [
            "9",
            "10",
            "12",
            "15"
        ],
        answer: "12"
    },

    // Q25
    {
    question: "ما الناتج المتوقع من البرنامج التالي؟",
    code: `
#include <iostream>
using namespace std;

int main()
{
    int x = 1;

    do
    {
        cout << x << " ";
        x++;

    } while(x <= 3)

    return 0;
}
    `,
    options: [
        "1 2 3",
        "1 2 3 4",
        "1 2",
        "Error"
    ],
    answer: "Error"
},

];