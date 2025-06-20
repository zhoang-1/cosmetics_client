
export const categories = [
    {
        name: " DANH MỤC SẢN PHẨM",
        link: "Danh-Muc-San-Pham",
        parent: [
            {
                name: "Trang điểm",
                link: "trang-diem",
                children: [
                    {
                        name:"Trang điểm mặt",
                        link:"trang-diem-mat",
                        grandchildren: [
                            {
                                name: "Kem lót",
                                link: "kem-lot"
                            },
                            {
                                name: "Kem nền",
                                link: "kem-nen"
                            },
                            {
                                name: "Phấn nước",
                                link: "phan-nuoc"
                            },
                            {
                                name: "BB/CC Cream",
                                link: "bb-cc-cream"
                            },
                            {
                                name: "Che khuyết điểm",
                                link: "che-khuyet-diem"
                            },
                            {
                                name: "Tạo khối/sáng",
                                link: "tao-khoi-sang"
                            },
                            {
                                name: "Phấn má",
                                link: "phan-ma"
                            },,
                            {
                                name: "Phấn nền/phủ",
                                link: "phan-nen-phu"
                            },,
                            {
                                name: "Xịt khóa Makeup",
                                link: "xit-khoa-makeup"
                            }
        
                        ]
                    },
                    {
                        name:"Trang điểm mắt",
                        link:"trang-diem-mat",
                        grandchildren: [
                            {
                                name: "Phấn mắt",
                                link: "phan-mat"
                            },
                            {
                                name: "Kẻ mắt",
                                link: "ke-mat"
                            },
                            {
                                name: "Mascara",
                                link: "mascara"
                            },
                        ]
                    },
                    {
                        name:"Trang điểm môi",
                        link:"trang-diem-moi",
                        grandchildren: [
                            {
                                name: "Son môi",
                                link: "son-moi"
                            },
                            {
                                name: "Son dưỡng",
                                link: "son-duong"
                            },
                            {
                                name: "Son bóng",
                                link: "son-bong"
                            },
                            {
                                name: "Bảng màu son",
                                link: "bang-mau-son"
                            },
                        ]
                    },
                    {
                        name:"Phụ kiện trang điểm",
                        link:"phu-kien-trang-diem",
                        grandchildren: [
                            {
                                name: "Cọ trang điểm",
                                link: "co-trang-diem"
                            },
                            {
                                name: "Mút trang điểm",
                                link: "mut-trang-diem"
                            },
                            {
                                name: "Gương trang điểm",
                                link: "guong-trang-diem"
                            },
                            {
                                name: "Bông tẩy trang",
                                link: "bong-tay-trang"
                            },
                        ]
                    },
                ]

               
            },
            {
                name: "Chăm sóc da",
                link: "cham-soc-da",
                children: [
                    {
                        name:"Sữa rửa mặt",
                        link:"sua-rua-mat"
                    },
                    {
                        name:"Tẩy trang",
                        link:"tay-trang"
                    },
                    {
                        name:"Tẩy tế bào chết",
                        link:"tay-te-bao-chet"
                    },
                    {
                        name:"Nước hoa hồng",
                        link:"nuoc-hoa-hong"
                    },
                    {
                        name:"Serum",
                        link:"serum"
                    },
                    {
                        name:"Kem dưỡng",
                        link:"kem-duong"
                    },
                    {
                        name:"Mặt nạ",
                        link:"mat-na"
                    },
                    {
                        name:"Kem chống nắng",
                        link:"kem-chong-nang"
                    },
                ]
            },

            {
                name: "Chăm sóc cơ thể",
                link: "cham-soc-co-the",
                children: [
                    {
                        name:"Sữa tắm",
                        link:"sua-tam"
                    },
                    {
                        name:"Dầu gội",
                        link:"dau-goi"
                    },
                    {
                        name:"Dầu xả",
                        link:"dau-xa"
                    },
                    {
                        name:"Xịt khoáng",
                        link:"xit-khoang"
                    },
                    {
                        name:"Khử mùi",
                        link:"khu-mui"
                    },
                ]
            },
            {
                name: "Nước hoa",
                link: "nuoc-hoa",
                children: [
                    {
                        name:"Nước hoa nam",
                        link:"nuoc-hoa-nam"
                    },
                    {
                        name:"Nước hoa nữ",
                        link:"nuoc-hoa-nu"
                    },
                    {
                        name:"Nước hoa unisex",
                        link:"nuoc-hoa-unisex"
                    },
                ]
            },

            {
                name: "Sản phẩm khác",
                link: "san-pham-khac",
                children: [
                    {
                        name:"Bông tẩy trang",
                        link:"bong-tay-trang"
                    },
                    {
                        name:"Bông tắm",
                        link:"bong-tam"
                    },
                    {
                        name:"Khăn giấy",
                        link:"khach-giay"
                    },
                    {
                        name:"Khăn mặt",
                        link:"khach-mat"
                    },
                ]
            },
        ]
    },
    {
        name: "THƯƠNG HIỆU",
        link: "thuong-hieu",
        parent: [
            {
                name: "Thương hiệu nổi bật",
                link: "thuong-hieu-noi-bat"
            },
            {
                name: "Thương hiệu mới",
                link: "thuong-hieu-moi"
            },
            {
                name: "Thương hiệu yêu thích",
                link: "thuong-hieu-yeu-thich"
            },
        ]
    },
    {
        name: "BÀI VIẾT",
        link: "bai-viet",
        parent: []
    },
    {
        name: "KHUYẾN MÃI",
        link: "khuyen-mai",
        parent: []
    }
]