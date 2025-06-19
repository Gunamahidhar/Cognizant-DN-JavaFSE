import java.util.Arrays;
import java.util.Comparator;

public class SearchApp {

    // Linear Search
    public static int linearSearch(Product[] products, String key) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productName.equalsIgnoreCase(key)) {
                return i;
            }
        }
        return -1;
    }

    // Binary Search (on sorted array)
    public static int binarySearch(Product[] products, String key) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int compare = products[mid].productName.compareToIgnoreCase(key);

            if (compare == 0) return mid;
            else if (compare < 0) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Footwear"),
            new Product(3, "Mobile", "Electronics"),
            new Product(4, "Watch", "Accessories"),
            new Product(5, "Bag", "Travel")
        };

        // Linear Search
        int indexLinear = linearSearch(products, "Mobile");
        System.out.println("Linear Search: Found at index " + indexLinear);

        // Sort the array for binary search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        // Binary Search
        int indexBinary = binarySearch(products, "Mobile");
        System.out.println("Binary Search: Found at index " + indexBinary);
    }
}
class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }
}