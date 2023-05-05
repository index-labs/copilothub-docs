---
sidebar_position: 2
---

# Create a Copilot

Instruction about how to create a Copilot in our platform.

## Which Copilot to create?

These are a few of the factors to consider when choosing Copilot.

**Level of customization**: If you need a Copilot that is highly personalized to your specific needs and knowledge base, a Data Copilot may be the better choice. If you're looking for a more generalized tool that can assist with a variety of tasks, a Prompt Copilot may be sufficient.

**Data availability**: Consider the availability and accessibility of the data you would need to create a Data Copilot. If you have a lot of relevant data readily available, a Data Copilot may be a good option. However, if you don't have access to much data or don't have the time or resources to gather it, a Prompt Copilot may be a better choice.

## Create a Copilot

Click the `Create` button in `Home` page and follow the creating steps.

### Uploading Data

![Upload Data Image](/img/upload_data.jpeg)

We have supported 3 different type of data source, which are **files (pdf, epub)**, **url** and **text**.

The number of files/urls to upload is unlimited for everyone. Token size is the only limit we have when uploading data. Token is the smallest unit passed to LLM. For example, a word `hello` could be splited into 2 tokens `he` and `llo`.

100 words is roughly equal to 70 tokens.

### Fill up Copilot settings

There are a few fields to complete while creating a Copilot.

#### Name & Description

Information shown on the Copilot card. **These field will not impact the output results from AI**.

![Copilot Card](/img/copilot_card.jpeg)

#### User Prompt

This field will determine the final role and response of your Copilot. Leave it alone if you prefer talking to the model directly without any instruction.

We also write a [Prompt Guiding](/tutorial-extras/prompt-engineer.md) to help you write a good prompt.
