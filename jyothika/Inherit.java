class Shape {
    public void display() {
       System.out.println("Inside display");
    }
 }
 
 class Square extends Shape {
    public void area() {
       System.out.println("Inside area");
    }
 }
 
 class Cube extends Square {
    public void volume() {
       System.out.println("Inside volume");
    }
 }
 
 public class Inherit { // The filename must be Inherit.java
    public static void main(String[] arguments) {
       Cube cube = new Cube();
       cube.display();
       cube.area();
       cube.volume();
    }
 }