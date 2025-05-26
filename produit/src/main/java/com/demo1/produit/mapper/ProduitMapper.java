package com.demo1.produit.mapper;

import com.demo1.produit.dto.ProduitDTO;
import com.demo1.produit.entity.Produit;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProduitMapper {
    ProduitDTO toDto(Produit produit);
    Produit toEntity(ProduitDTO produitDTO);
}
