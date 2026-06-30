package com.cognizant.ormlearn.model.service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import com.cognizant.ormlearn.model.service.exception.CountryNotFoundException;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public Country findCountryByCode(String countryCode)
            throws CountryNotFoundException {

        Optional<Country> result =
                countryRepository.findById(countryCode);

        if (!result.isPresent()) {

            throw new CountryNotFoundException(
                    "Country not found");

        }

        return result.get();

    }

    @Transactional
    public void addCountry(Country country) {

        countryRepository.save(country);

    }

}

public class CountryService {
	@Transactional
	public void addCountry(Country country) {

	    countryRepository.save(country);

	}

}
