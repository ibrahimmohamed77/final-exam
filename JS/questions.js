const questions = [

    // =====================================================
    // Q1 - Arithmetic & Assignment
    // =====================================================
    {
        question: "ما الناتج؟",
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


    // =====================================================
    // Q2 - Arithmetic & Modulo
    // =====================================================
    {
        question: "ما الناتج؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int x = 23;

    cout << x / 5 << " " << x % 5;

    return 0;
}
        `,
        options: [
            "4 3",
            "4 2",
            "5 3",
            "5 2"
        ],
        answer: "4 3"
    },


    // =====================================================
    // Q3 - Logical Operators
    // =====================================================
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


    // =====================================================
    // Q4 - Logical !
    // =====================================================
    {
        question: "ما الناتج؟",
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
            "17",
            "true"
        ],
        answer: "No"
    },


    // =====================================================
    // Q5 - Problem Solving + IF ELSE IF
    // =====================================================
    {
        question: "إذا كانت قيمة x = 15، ما الناتج؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int x = 15;

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
        answer: "A"
    },


    // =====================================================
    // Q6 - Test Case
    // =====================================================
    {
        question: "أي مجموعة من القيم تعتبر أفضل Test Case لاختبار جميع الحالات الموجودة في البرنامج؟",
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


    // =====================================================
    // Q7 - Nested IF
    // =====================================================
    {
        question: "ما الناتج؟",
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


    // =====================================================
    // Q8 - Array / Correct Code
    // =====================================================
    {
        question: "لدينا مصفوفة تحتوي على أرقام موجبة وسالبة. نريد طباعة أكبر رقم. أي كود صحيح؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int a[5] = {3, -2, 10, 5, 7};

    // أي كود من التالي صحيح لإيجاد أكبر رقم؟

    return 0;
}
        `,
        options: [
            `int big = a[0];
for(int i = 1; i < 5; i++)
{
    if(a[i] > big)
        big = a[i];
}
cout << big;`,

            `int big = 0;
for(int i = 1; i < 5; i++)
{
    if(a[i] > big)
        big = a[i];
}
cout << big;`,

            `int big = a[0];
for(int i = 1; i <= 5; i++)
{
    if(a[i] > big)
        big = a[i];
}
cout << big;`,

            `int big = a[0];
for(int i = 1; i < 5; i++)
{
    if(a[i] < big)
        big = a[i];
}
cout << big;`
        ],
        answer: `int big = a[0];
for(int i = 1; i < 5; i++)
{
    if(a[i] > big)
        big = a[i];
}
cout << big;`
    },


    // =====================================================
    // Q9 - FOR
    // =====================================================
    {
        question: "ما الناتج؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    for(int i = 1; i <= 5; i++)
    {
        cout << i << " ";
    }

    return 0;
}
        `,
        options: [
            "1 2 3 4 5",
            "0 1 2 3 4",
            "1 2 3 4",
            "5 4 3 2 1"
        ],
        answer: "1 2 3 4 5"
    },


    // =====================================================
    // Q10 - FOR + IF
    // =====================================================
    {
        question: "ما الناتج؟",
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
            "12",
            "9",
            "21"
        ],
        answer: "12"
    },


    // =====================================================
    // Q11 - BREAK
    // =====================================================
    {
        question: "ما الناتج؟",
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
            "1 2 3 4",
            "1 2 3 4 5",
            "5 6 7 8 9 10",
            "1 2 3 4 5 6 7 8 9 10"
        ],
        answer: "1 2 3 4"
    },


    // =====================================================
    // Q12 - CONTINUE
    // =====================================================
    {
        question: "ما الناتج؟",
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
            "1 2",
            "3 4 5"
        ],
        answer: "1 2 4 5"
    },


    // =====================================================
    // Q13 - Nested FOR
    // =====================================================
    {
        question: "كم مرة سيتم تنفيذ cout؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    for(int i = 1; i <= 3; i++)
    {
        for(int j = 1; j <= 2; j++)
        {
            cout << "*";
        }
    }

    return 0;
}
        `,
        options: [
            "3",
            "5",
            "6",
            "9"
        ],
        answer: "6"
    },


    // =====================================================
    // Q14 - Nested FOR + IF
    // =====================================================
    {
        question: "ما الناتج؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    for(int i = 1; i <= 3; i++)
    {
        for(int j = 1; j <= 3; j++)
        {
            if(i == j)
                cout << "1";
            else
                cout << "0";
        }

        cout << endl;
    }

    return 0;
}
        `,
        options: [
            `100
010
001`,

            `111
111
111`,

            `001
010
100`,

            `000
000
000`
        ],
        answer: `100
010
001`
    },


    // =====================================================
    // Q15 - Array Index
    // =====================================================
    {
        question: "ما قيمة العنصر الموجود في index رقم 2؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int a[5] = {10, 20, 30, 40, 50};

    cout << a[2];

    return 0;
}
        `,
        options: [
            "10",
            "20",
            "30",
            "40"
        ],
        answer: "30"
    },


    // =====================================================
    // Q16 - Array + Problem Solving
    // =====================================================
    {
        question: "ما الناتج؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int a[5] = {3, 8, 5, 10, 7};
    int sum = 0;

    for(int i = 0; i < 5; i++)
    {
        if(a[i] > 5)
            sum += a[i];
    }

    cout << sum;

    return 0;
}
        `,
        options: [
            "18",
            "25",
            "30",
            "33"
        ],
        answer: "25"
    },


    // =====================================================
    // Q17 - Array Out Of Bounds
    // =====================================================
    {
        question: "ما المشكلة في الكود التالي؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int a[5] = {10, 20, 30, 40, 50};

    for(int i = 0; i <= 5; i++)
    {
        cout << a[i] << " ";
    }

    return 0;
}
        `,
        options: [
            "الكود صحيح تمامًا",
            "المشكلة أن المصفوفة تبدأ من 1",
            "المشكلة أن i تصل إلى 5 وهذا خارج حدود المصفوفة",
            "المشكلة في cout"
        ],
        answer: "المشكلة أن i تصل إلى 5 وهذا خارج حدود المصفوفة"
    },


    // =====================================================
    // Q18 - 2D Array
    // =====================================================
    {
        question: "ما الناتج؟",
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


    // =====================================================
    // Q19 - 2D Array + Nested Loop
    // =====================================================
    {
        question: "ما الناتج؟",
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


    // =====================================================
    // Q20 - String
    // =====================================================
    {
        question: "ما الناتج؟",
        code: `
#include <iostream>
#include <string>
using namespace std;

int main()
{
    string name = "Ali";

    cout << name[1];

    return 0;
}
        `,
        options: [
            "A",
            "l",
            "i",
            "Ali"
        ],
        answer: "l"
    },


    // =====================================================
    // Q21 - Array Of Char
    // =====================================================
    {
        question: "ما الناتج؟",
        code: `
#include <iostream>
using namespace std;

int main()
{
    char name[] = "Ali";

    cout << name[2];

    return 0;
}
        `,
        options: [
            "A",
            "l",
            "i",
            "Ali"
        ],
        answer: "i"
    },


    // =====================================================
    // Q22 - Function
    // =====================================================
    {
        question: "ما الناتج؟",
        code: `
#include <iostream>
using namespace std;

int calc(int x)
{
    return x * 2;
}

int main()
{
    int x = 5;

    cout << calc(x);

    return 0;
}
        `,
        options: [
            "5",
            "7",
            "10",
            "25"
        ],
        answer: "10"
    },


    // =====================================================
    // Q23 - Global & Local Scope
    // =====================================================
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


    // =====================================================
    // Q24 - Prefix Sum
    // =====================================================
    {
        question: "ما الناتج؟ البرنامج يحسب مجموع العناصر من index 1 إلى index 3 باستخدام Prefix Sum.",
        code: `
#include <iostream>
using namespace std;

int main()
{
    int a[5] = {3, 1, 4, 2, 5};
    int p[5];

    p[0] = a[0];

    for(int i = 1; i < 5; i++)
    {
        p[i] = p[i - 1] + a[i];
    }

    int left = 1;
    int right = 3;

    cout << p[right] - p[left - 1];

    return 0;
}
        `,
        options: [
            "6",
            "7",
            "8",
            "10"
        ],
        answer: "7"
    },


    // =====================================================
    // Q25 - Errors + using namespace + do while
    // =====================================================
    {
        question: "ما الأخطاء الموجودة في الكود التالي؟",
        code: `
#include <iostream>

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
            "يوجد خطأ واحد فقط: نحتاج using namespace std;",
            "يوجد خطأ واحد فقط: نحتاج ; بعد while(x <= 3)",
            "يوجد خطآن: نحتاج using namespace std; ونحتاج ; بعد while(x <= 3)",
            "لا يوجد أي خطأ"
        ],
        answer: "يوجد خطآن: نحتاج using namespace std; ونحتاج ; بعد while(x <= 3)"
    }

];