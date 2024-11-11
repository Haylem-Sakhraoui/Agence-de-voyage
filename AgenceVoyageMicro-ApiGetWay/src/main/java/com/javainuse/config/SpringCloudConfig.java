package com.javainuse.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringCloudConfig {

    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
        return builder.routes()
                .route(r -> r.path("/offre/**")
                        .uri("lb://offre-service")
                        .id("hl"))
                .route(r -> r.path("/maisonHote/**")
                        .uri("lb://MAISON-HOTE-SERVICE")
                        .id("rm"))
                .route(r -> r.path("/transport/**")
                        .uri("lb://Transport-service")
                        .id("hs"))
                .route(r -> r.path("/api/reservation")
                .uri("lb://agence-service")
                .id("hz"))
                .route(r -> r.path("/api/hotels")
                        .uri("lb://hotel-service")
                        .id("hz"))

                .build();
    }

}