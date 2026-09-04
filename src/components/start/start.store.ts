import { create } from "zustand";
import { persist } from "zustand/middleware";

export type BusinessType =
  | "digital_product"
  | "community"
  | "saas"
  | "course"
  | "service"
  | "membership";

export type PricingModel = "one_time" | "subscription" | "free" | null;

export type SettlementNetwork = "base" | "solana" | "ethereum" | null;

export type OnboardingStep =
  | "intent"
  | "business"
  | "details"
  | "pricing"
  | "access"
  | "settlement"
  | "review"
  | "complete";

interface OnboardingState {
  // Navigation
  currentStep: OnboardingStep;
  history: OnboardingStep[];

  // Business
  businessType: BusinessType | null;
  businessName: string;
  description: string;

  // Flexible answers for conditional paths
  answers: Record<string, unknown>;

  // Pricing
  pricingModel: PricingModel;

  // Settlement
  settlementCurrency: "USDC";
  settlementNetwork: SettlementNetwork;
  settlementWallet: string;
}

interface OnboardingActions {
  setStep: (step: OnboardingStep) => void;
  pushStep: (step: OnboardingStep) => void;
  goBack: () => void;

  setBusinessType: (type: BusinessType) => void;
  setBusinessName: (name: string) => void;
  setDescription: (description: string) => void;

  setAnswer: (key: string, value: unknown) => void;
  removeAnswer: (key: string) => void;

  setPricingModel: (model: PricingModel) => void;

  setSettlementNetwork: (network: SettlementNetwork) => void;

  setSettlementWallet: (wallet: string) => void;

  reset: () => void;
}

type OnboardingStore = OnboardingState & OnboardingActions;

const initialState: OnboardingState = {
  currentStep: "intent",
  history: [],

  businessType: null,
  businessName: "",
  description: "",

  answers: {},

  pricingModel: null,

  settlementCurrency: "USDC",
  settlementNetwork: null,
  settlementWallet: "",
};

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set) => ({
      ...initialState,

      setStep: (step) => set({ currentStep: step }),

      pushStep: (step) =>
        set((state) => ({
          history: [...state.history, state.currentStep],
          currentStep: step,
        })),

      goBack: () =>
        set((state) => {
          const previousStep = state.history.at(-1);

          if (!previousStep) {
            return {};
          }

          return {
            currentStep: previousStep,
            history: state.history.slice(0, -1),
          };
        }),

      setBusinessType: (businessType) =>
        set({
          businessType,
        }),

      setBusinessName: (businessName) =>
        set({
          businessName,
        }),

      setDescription: (description) =>
        set({
          description,
        }),

      setAnswer: (key, value) =>
        set((state) => ({
          answers: {
            ...state.answers,
            [key]: value,
          },
        })),

      removeAnswer: (key) =>
        set((state) => {
          const { [key]: _, ...answers } = state.answers;

          return { answers };
        }),

      setPricingModel: (pricingModel) => set({ pricingModel }),

      setSettlementNetwork: (settlementNetwork) => set({ settlementNetwork }),

      setSettlementWallet: (settlementWallet) => set({ settlementWallet }),

      reset: () => set(initialState),
    }),
    {
      name: "store-onboarding",
    },
  ),
);
