#include <vector>
#include <iostream>
#include <string>

using namespace std;

class Rectangulo
{

    int ancho;
    int altura;

public:
    int esquinaX;
    int esquinaY;

    Rectangulo();
    Rectangulo(int x, int y);
    Rectangulo(int x, int y, int w, int h);

    int getAncho();
    void setAncho(int w);
    int getAltura();
    void setAltura(int h);
    int getArea();
    void setArea(Rectangulo rect);
};

// Main

int main()
{
    Rectangulo rec1;
    rec1.setAncho(20);
    rec1.setAltura(5);
    rec1.esquinaX = 10;
    rec1.esquinaY = 10;

    Rectangulo rec2;
    rec2.setAncho(20);
    rec2.setAltura(5);
    rec2.esquinaX = 30;
    rec2.esquinaY = 5;

    Rectangulo rec3;
    rec3.setAncho(20);
    rec3.setAltura(5);
    rec3.esquinaX = 15;
    rec3.esquinaY = 30;

    cout << "El area del rectángulo 1 es: " << rec1.setArea << endl;
    cout << "El area del rectángulo 2 es: " << rec2.setArea << endl;
    cout << "El area del rectángulo 3 es: " << rec3.setArea << endl;

    intersecta(Rectangulo rect);

    cout << "El rectángulo" << rec1 << " y " << rec2 << intersecta << endl;
    cout << "El rectángulo" << rec1 << " y " << rec3 << intersecta << endl;
    cout << "El rectángulo" << rec2 << " y " << rec3 << intersecta << endl;
}

// Constructores

Rectangulo::Rectangulo()
{

    ancho = 0;
    alto = 0;

    esquinaX = 0;
    esquinaY = 0;
}

Rectangulo::Rectangulo(int x, int y, int w, int h)
{

    w = ancho;
    h = altura;
}

// Ancho

Rectangulo::getAncho()
{

    return ancho;
}

Rectangulo::setAncho(int w)
{

    if (ancho <= 0)
    {

        ancho = w;
    }

    // Altura
}

Rectangulo::getAltura()
{

    return altura;
}

Rectangulo::setAltura(int h)
{

    if (altura <= 0)
    {

        altura = h;
    }
}

Rectangulo::getArea()
{

    area = (ancho * altura);
    cout << "El area del rectángulo es: " << area << endl;
}

Rectangulo::intersecta(Rectangulo rect)
{

    // eje X

    if (esquinaX1 <= esquinaX2 + ancho2 && esquinaX1 + ancho1 >= esquinaX2)
    {
        cout << " intersecaqn en el eje X " << end;
    }

    else
    {
        cout << " NO intersecan en el eje X " << end;
    }

    // Eje Y

    if (esquinaY1 <= esquinaY2 + altura2 && esquinaY1 + altura1 >= esquinaY2)
    {
        cout << " intersecaqn en el eje Y" << end;
    }

    else
    {
        cout << " NO intersecaqn en el eje Y " << end;
    }
}
