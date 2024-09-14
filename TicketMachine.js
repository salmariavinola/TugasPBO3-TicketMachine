public class TicketMachine{
   // instance variables - replace the example below with your own
    private int price;
    private int balance;
    private int total;

    /**
     * Constructor for objects of class TicketMachine
     */
    public TicketMachine(int cost){
        // initialise instance variables
        price = cost;
        balance = 0;
        total = 0;
    }
    
    /**
     * Mendapatkan harga tiket
     */
    public int getPrice(){
        return price;
    }
    
    /**
     * Mendapatkan saldo saat ini
     */
    public int getBalance(){
        return balance;
    }

    /**
     * Memasukkan uang ke dalam mesin tiket
     * @param amount jumlah uang yang dimasukkan (harus positif)
     */
    public void insertMoney(int amount){
        if(amount > 0){
            balance = balance + amount;
        } else{
            System.out.println("Use a positive amount rather than " + amount);
        }
    }
    
    /**
     * Mencetak tiket jika saldo cukup, mengurangi saldo sesuai harga tiket, dan menambahkan ke total penjualan
     */
    public void printTicket(){
        if(balance >= price){
            System.out.println("#######");
            System.out.println("# The BlueJ Line");
            System.out.println("# Ticket");
            System.out.println("# " + price + " cents.");
            System.out.println("###############");
            System.out.println();
            
            total = total + price; 
            balance = balance - price; 
        } else {
            System.out.println("You must insert at least: " + (price - balance) + " more cents.");
        }
    }
    
    /**
     * Mengembalikan kembalian kepada pengguna
     * @return jumlah kembalian
     */
    public int refundBalance() {
        int refund = balance;
        balance = 0; // Reset saldo setelah mengembalikan kembalian
        System.out.println("Refunding " + refund + " cents.");
        return refund;
    }

    /**
     * Mendapatkan total uang yang dikumpulkan oleh mesin tiket
     * @return total uang yang terkumpul
     */
    public int getTotal() {
        return total;
    }
}