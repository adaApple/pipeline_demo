package com.demo1.produit.service;

import com.demo1.produit.dto.ProduitDTO;
import com.demo1.produit.entity.Produit;
import com.demo1.produit.mapper.ProduitMapper;
import com.demo1.produit.repository.ProduitRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProduitServiceImpl implements IProduitService {

    private final ProduitRepository repository;
    private final ProduitMapper mapper;

    public ProduitServiceImpl(ProduitRepository repository, ProduitMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public List<ProduitDTO> getAll() {
        return repository.findAll().stream().map(mapper::toDto).toList();
    }

    @Override
    public ProduitDTO getById(Long id) {
        Produit produit = repository.findById(id).orElseThrow(() -> new RuntimeException("Produit non trouvé"));
        return mapper.toDto(produit);
    }

    @Override
    public ProduitDTO create(ProduitDTO dto) {
        Produit produit = mapper.toEntity(dto);
        return mapper.toDto(repository.save(produit));
    }

    @Override
    public ProduitDTO update(Long id, ProduitDTO dto) {
        Produit produit = repository.findById(id).orElseThrow(() -> new RuntimeException("Produit non trouvé"));
        produit.setNom(dto.getNom());
        produit.setPrix(dto.getPrix());
        return mapper.toDto(repository.save(produit));
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
