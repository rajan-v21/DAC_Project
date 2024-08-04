package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Cart;
import com.example.demo.repositories.CartRepository;

@Service
public class OrderService {

    @Autowired
    private CartRepository orderRepository;

    public Cart saveOrder(Cart order) {
        return orderRepository.save(order);
    }

    public Cart getOrderById(Integer orderId) {
        return orderRepository.findById(orderId).orElse(null);
    }

    public void deleteOrder(Integer orderId) {
        orderRepository.deleteById(orderId);
    }
    public List<Cart> getAllOrders() {
        return orderRepository.findAll();
    }
}
