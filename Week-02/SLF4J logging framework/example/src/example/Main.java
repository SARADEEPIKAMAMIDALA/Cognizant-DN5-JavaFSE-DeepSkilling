package example;

//Super class
class Figure {

 double dimension1;
 double dimension2;

 // Parameterized constructor
 Figure(double dimension1, double dimension2) {
     this.dimension1 = dimension1;
     this.dimension2 = dimension2;
 }

 // Area method
 void area() {
     System.out.println("Area of the figure is");
 }
}


//Child class 1
class Rectangle extends Figure {

 // Constructor
 Rectangle(double length, double breadth) {
     super(length, breadth);
 }

 // Method overriding
 void area() {
     double result = dimension1 * dimension2;
     System.out.println("Area of rectangle is: " + result);
 }
}


//Child class 2
class Triangle extends Figure {

 // Constructor
 Triangle(double base, double height) {
     super(base, height);
 }

 // Method overriding
 void area() {
     double result = 0.5 * dimension1 * dimension2;
     System.out.println("Area of triangle is: " + result);
 }
}


//Main class
public class Main {

 public static void main(String[] args) {

     // Creating objects
     Rectangle r = new Rectangle(10, 20);
     Triangle t = new Triangle(10, 5);


     // Figure reference variable
     Figure f;


     // Assigning Rectangle object
     f = r;
     f.area();


     // Assigning Triangle object
     f = t;
     f.area();
 }
}