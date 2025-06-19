public class FinancialForecast {

    // Recursive method to forecast future value
    public static double futureValue(double presentValue, double rate, int years) {
        // Base Case
        if (years == 0) {
            return presentValue;
        }
        // Recursive Case
        return futureValue(presentValue, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double presentValue = 10000.0; // ₹10,000
        double growthRate = 0.05;      // 5% growth
        int forecastYears = 5;

        double result = futureValue(presentValue, growthRate, forecastYears);
        System.out.printf("Future Value after %d years = ₹%.2f%n", forecastYears, result);
    }
}
