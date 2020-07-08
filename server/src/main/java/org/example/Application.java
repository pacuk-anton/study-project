package org.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class Application
{
    public static void main(String[] args)
    {
        System.out.println("[ServerApplication] Starting context.");
        final ConfigurableApplicationContext context = SpringApplication.run(Application.class, args);
        context.registerShutdownHook();
        System.out.println("[ServerApplication] Context started.");
    }
}
