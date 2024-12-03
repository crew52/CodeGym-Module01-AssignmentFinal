// Mảng chứa các sổ tiết kiệm
const arrSavingsBooks = [];
let nextBookCode = 1;

// Khởi tạo một số sổ tiết kiệm và thêm vào mảng
let savingsBook1 = new SavingsBook("01", SavingTypes.LONG_TERM, "Nguyễn Văn A", 123456789, "2024-12-03", 5000000);
let savingsBook2 = new SavingsBook("02", SavingTypes.SHORT_TERM, "Trần Thị B", 987654321, "2024-11-20", 3000000);
let savingsBook3 = new SavingsBook("03", SavingTypes.SPECIAL, "Lê Quang C", 456789123, "2024-10-15", 8000000);

// Thêm các đối tượng vào mảng arrProduct
arrSavingsBooks.push(savingsBook1);
arrSavingsBooks.push(savingsBook2);
arrSavingsBooks.push(savingsBook3);

displaySavingsBooks();

function displaySavingsBooks() {
    const tableBody = document.getElementById('savingsBookTable').querySelector('tbody');
    tableBody.innerHTML = ""; // Xóa dữ liệu cũ
    arrSavingsBooks.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.bookCode}</td>
            <td>${product.savingsType}</td>
            <td>${product.customerName}</td>
            <td>${product.idCard}</td>
            <td>${product.openingDate}</td>
            <td>${product.depositAmount}</td>
            <td>
                <button class="delete-btn" onclick="deleteSaving()">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Thêm sổ tiết kiệm mới
function addNewSavingsBook() {
    // Lấy giá trị từ các input
    const savingsType = document.getElementById('savingsType').value.trim();
    const customerName = document.getElementById('customerName').value.trim();
    const idCard = document.getElementById('idCard').value.trim();
    const openingDate = document.getElementById('openingDate').value.trim();
    const depositAmount = document.getElementById('depositAmount').value.trim();

    const bookCode = `SB${nextBookCode}`;

    // Kiểm tra dữ liệu nhập vào thông qua validator
    const validationError = validateAllFields(bookCode, savingsType, customerName, idCard, openingDate, depositAmount);

    if (validationError) {
        alert(validationError);
        return;
    }

    // Tạo đối tượng SavingsBook và thêm vào mảng
    const newSavingsBook = new SavingsBook(
        bookCode,
        SavingTypes[savingsType],
        customerName,
        idCard,
        openingDate,
        parseFloat(depositAmount)
    );

    arrSavingsBooks.push(newSavingsBook);

    // Hiển thị các sổ tiết kiệm trong mảng
    displaySavingsBooks();

    // Hiển thị thông báo thành công
    alert("Savings book added successfully!");

    // Clear input fields sau khi thêm sản phẩm
    document.getElementById('bookCode').value = "";
    document.getElementById('savingsType').value = "";
    document.getElementById('customerName').value = "";
    document.getElementById('idCard').value = "";
    document.getElementById('openingDate').value = "";
    document.getElementById('depositAmount').value = "";
}
function findSavingById(id) {
    return arrSavingsBooks.findIndex(product => product.id === id);
}
// Xóa sản phẩm
function deleteSaving(id) {
    const index = findSavingById(id);
    if (index !== -1) {
        if (confirm(`Are you sure you want to delete "${arrSavingsBooks[index].bookCode}"?`)) {
            arrSavingsBooks.splice(index, 1);
            displaySavingsBooks();
        }
    } else {
        alert("Saving not found!");
    }
}