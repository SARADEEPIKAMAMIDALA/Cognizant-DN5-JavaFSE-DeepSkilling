package com.cognizant.ormlearn;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER =
            LoggerFactory.getLogger(OrmLearnApplication.class);

    private static CountryService countryService;

    public static void main(String[] args) {

        ApplicationContext context =
                SpringApplication.run(OrmLearnApplication.class, args);

        countryService = context.getBean(CountryService.class);

        testSearchCountries();

        testSearchCountriesSorted();

        testCountriesStartingWith();

    }

    private static void testSearchCountries() {

        LOGGER.info("Countries containing 'ia'");

        List<Country> list = countryService.searchCountries("ia");

        list.forEach(System.out::println);
    }

    private static void testSearchCountriesSorted() {

        LOGGER.info("Countries containing 'ia' sorted");

        List<Country> list = countryService.searchCountriesSorted("ia");

        list.forEach(System.out::println);
    }

    private static void testCountriesStartingWith() {

        LOGGER.info("Countries starting with A");

        List<Country> list = countryService.getCountriesStartingWith("A");

        list.forEach(System.out::println);
    }

}