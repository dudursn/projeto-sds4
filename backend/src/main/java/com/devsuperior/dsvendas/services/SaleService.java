package com.devsuperior.dsvendas.services;

import com.devsuperior.dsvendas.dtos.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SaleService {

    @Autowired
    private SaleRepository repository;

    @Autowired
    private SellerRepository sellerRepository;

    public List<SaleDTO> findAll() {

        List<Sale> result = repository.findAll();

        //Cada elemento da lista original é convertida para a classe alvo DTO e depois a stream é convertida para lista
        return result.stream().map(data -> new SaleDTO(data)).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public Page<SaleDTO> findAllPagination(Pageable pageable) {

        sellerRepository.findAll();
        Page<Sale> result = repository.findAll(pageable);

        //Cada elemento da lista original é convertida para a classe alvo DTO e depois a stream é convertida para lista
        return result.map(data -> new SaleDTO(data));
    }
}
