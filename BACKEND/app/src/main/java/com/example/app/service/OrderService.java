package com.example.app.service;

import com.example.app.dto.order.AddProductInOrderDTO;
import com.example.app.dto.order.OrderDto;
import com.example.app.dto.order.OrderRequestDTO;
import com.example.app.model.Order;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface OrderService {

    OrderDto createOrder(OrderRequestDTO orderRequestDTO);

    Page<OrderDto> getAllOrdersByAdmin(Pageable pageable);

    List<OrderDto> getUserOrder(HttpServletRequest request);

    List<OrderDto> getUserOrderByAdmin(HttpServletRequest request, Long id);

    void deleteOrder(Long id);

}
