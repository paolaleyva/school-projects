/***********************************************************
 * 
 * Author: Paola Leyva
 * Assignment: Triangle 
 * Description: The Triangle project is a Java program that 
 * enables the creation and analysis of triangles. It provides 
 * the ability to create triangles with given side lengths, 
 * check if a triangle is equilateral or right-angled, and 
 * retrieve the lengths of its sides, while ensuring the 
 * validity of the triangle.
 *
 */

public class Triangle {
    private double side1;
    private double side2;
    private double side3;

    public Triangle(double side1, double side2, double side3) {
        if (isTriangle(side1, side2, side3)) {
            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
        } else {
            // If the sides do not form a valid triangle, initialize all sides to 1.0
            this.side1 = 1.0;
            this.side2 = 1.0;
            this.side3 = 1.0;
        }
    }

    // Private method to check if the given side lengths form a valid triangle
    private boolean isTriangle(double side1, double side2, double side3) {
        // Triangle inequality theorem: the sum of the lengths of any two sides of a triangle
        // must be greater than the length of the third side for it to be a valid triangle
        return side1 + side2 > side3 && side2 + side3 > side1 && side3 + side1 > side2;
    }

    // Getter methods to access the side lengths
    public double getSide1() {
        return side1;
    }

    public double getSide2() {
        return side2;
    }

    public double getSide3() {
        return side3;
    }

    // Method to check if the triangle is equilateral (all sides are equal)
    public boolean isEquilateral() {
        return side1 == side2 && side2 == side3;
    }

    // Method to check if the triangle is a right triangle
    public boolean isRight() {
        // Find the longest side of the triangle
        double maxSide = Math.max(side1, Math.max(side2, side3));
        // Use the Pythagorean theorem to check if the triangle is right-angled
        return maxSide * maxSide == side1 * side1 + side2 * side2 + side3 * side3 - maxSide * maxSide;
    }
}
