package com.demo1.produit.service;

import com.demo1.produit.dto.ProduitDTO;

import java.util.List;

public interface IProduitService {
    List<ProduitDTO> getAll();
    ProduitDTO getById(Long id);
    ProduitDTO create(ProduitDTO dto);
    ProduitDTO update(Long id, ProduitDTO dto);
    void delete(Long id);
}
