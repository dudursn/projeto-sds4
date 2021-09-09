package com.devsuperior.dsvendas.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="tb_sales")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer visited;
    private Integer deals;
    private double amount;
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "seller_id")
    private Seller seller;

    public Sale(){

    }


    public Sale(Long id, Integer visited, Integer deals, double amount, LocalDate date, Seller seller) {
        this.id = id;
        this.visited = visited;
        this.deals = deals;
        this.amount = amount;
        this.date = date;
        this.seller = seller;
    }
}
