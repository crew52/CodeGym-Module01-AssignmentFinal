class SavingsBook {
    // Constructor để khởi tạo thông tin sổ tiết kiệm
    constructor(bookCode, savingsType, customerName, idCard, openingDate, depositAmount) {
        // Khai báo các thuộc tính
        this.bookCode = bookCode; // Mã sổ (chuỗi tối đa 5 ký tự)
        this.savingsType = savingsType; // Loại tiết kiệm (chuỗi tối đa 10 ký tự)
        this.customerName = customerName; // Họ tên khách hàng (chuỗi tối đa 30 ký tự)
        this.idCard = idCard; // Chứng minh nhân dân (kiểu số)
        this.openingDate = openingDate; // Ngày mở sổ (kiểu chuỗi, đúng format ngày)
        this.depositAmount = depositAmount; // Số tiền gửi (kiểu số)
    }

    // Phương thức hiển thị thông tin sổ tiết kiệm
    displayInfo() {
        return `
        BookCode: ${this.bookCode}
        Savings Type: ${this.savingsType}
        Customer Name: ${this.customerName}
        Id Card: ${this.idCard}
        Opening Date: ${this.openingDate}
        Deposit Amount: ${this.depositAmount}
        `;
    }
}