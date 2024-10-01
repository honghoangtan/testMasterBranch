# Bước 1: dayjs().month() Để lấy ra số chỉ mục tháng

# Bước 2: Dùng getmonth(số chỉ mục) để lấy ra số tuần trong tháng

# currentIndex (Là lấy ra được chỉ mục tháng hiện tại)

# Khi có currentIndex (Chúng ta sẽ gán getMonth(curentIndex)) lúc này nó sẽ trả ra danh sách mảng của các tháng

# format('ddd') (Sẽ lấy ra Thứ)

# format('DD') (Sẽ lấy ra ngày)

# format('DD MM YY') (Sẽ lấy ra chính xác ngày hiện tại theo thời gian thực)

# dayjs('DD MM YY') (sẽ lấy ra cột móc thời gian ngày hiện tại theo thời gian thực)

# smallCalender sẽ truyền lên một tháng chỉ mục hiện tại và thay đổi ở context và đồng thời current Context ở context cũng cập nhật

# Vì Calender thay đổi theo chỉ mục tháng được truyền từ app nên SmallCalender mới truyền và thay đổi tháng chỉ mục ở Context

# Ở Reducer kiểu này (SavedEvent) thì sẽ tạo ra 1 Reducer như mọi khi

# Tham số đầu tiên là Reducer, thứ 2 là kiểu trả về, thứ 3 là Init

# Thì ở đây Init sẽ lấy ra giá trị từ localStorage nếu không có là mảng rỗng

# Mỗi khi state thay đổi thì sẽ cập nhật lại giá trị trong localStorage
