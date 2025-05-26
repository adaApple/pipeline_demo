package com.demo1.produit.controller;

import com.demo1.produit.dto.ProduitDTO;
import com.demo1.produit.repository.ProduitRepository;
import com.demo1.produit.service.IProduitService;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produits")
@Profile("test") // ⛔️ Ce contrôleur ne sera actif que si le profil "test" est activé
public class ProduitController {
    private final ProduitRepository produitRepository;
    private final IProduitService service;

    public ProduitController(IProduitService service, ProduitRepository produitRepository) {
        this.service = service;
        this.produitRepository = produitRepository;
    }

    @GetMapping
    public List<ProduitDTO> getAll() {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProduitDTO> getById(@PathVariable Long id) {
        return ResponseEntity.ok(service.getById(id));
    }

    @PostMapping
    public ResponseEntity<ProduitDTO> create(@RequestBody ProduitDTO dto) {
        return new ResponseEntity<>(service.create(dto), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ProduitDTO update(@PathVariable Long id, @RequestBody ProduitDTO dto) {
        return service.update(id, dto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/reset")
    public ResponseEntity<Void> resetDatabase() {
        produitRepository.deleteAll();
        return ResponseEntity.noContent().build();
    }
}
